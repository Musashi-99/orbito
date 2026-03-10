import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock3 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

type DateTimePickerProps = {
  value: string;
  onChange: (value: string) => void;
  minDateTime?: string;
  placeholder?: string;
  className?: string;
};

const TIME_STEP_MINUTES = 15;

const parseLocalDateTime = (value: string) => {
  if (!value) {
    return undefined;
  }

  const [datePart, timePart] = value.split("T");
  if (!datePart || !timePart) {
    return undefined;
  }

  const [year, month, day] = datePart.split("-").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  if ([year, month, day, hours, minutes].some(Number.isNaN)) {
    return undefined;
  }

  return new Date(year, month - 1, day, hours, minutes, 0, 0);
};

const formatLocalDateTimeValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const roundUpToStep = (date: Date, stepMinutes: number) => {
  const next = new Date(date);
  next.setSeconds(0, 0);

  const remainder = next.getMinutes() % stepMinutes;
  if (remainder !== 0) {
    next.setMinutes(next.getMinutes() + stepMinutes - remainder);
  }

  if (next < date) {
    next.setMinutes(next.getMinutes() + stepMinutes);
  }

  return next;
};

const getTimeOptions = (date: Date, minDate?: Date) => {
  const options: Array<{ label: string; value: string }> = [];
  const minimum = minDate ? roundUpToStep(minDate, TIME_STEP_MINUTES) : undefined;

  for (let hour = 0; hour < 24; hour += 1) {
    for (let minutes = 0; minutes < 60; minutes += TIME_STEP_MINUTES) {
      const optionDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour,
        minutes,
        0,
        0
      );

      if (minimum && optionDate < minimum) {
        continue;
      }

      options.push({
        label: format(optionDate, "p"),
        value: `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
      });
    }
  }

  return options;
};

const combineDateAndTime = (date: Date, timeValue: string) => {
  const [hours, minutes] = timeValue.split(":").map(Number);

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
    0,
    0
  );
};

const DateTimePicker = ({
  value,
  onChange,
  minDateTime,
  placeholder = "Select a date and time",
  className,
}: DateTimePickerProps) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const minDate = useMemo(
    () => (minDateTime ? parseLocalDateTime(minDateTime) : undefined),
    [minDateTime]
  );
  const selectedDateTime = useMemo(() => parseLocalDateTime(value), [value]);
  const selectedDate = selectedDateTime
    ? new Date(
        selectedDateTime.getFullYear(),
        selectedDateTime.getMonth(),
        selectedDateTime.getDate()
      )
    : undefined;
  const selectedTime = selectedDateTime ? format(selectedDateTime, "HH:mm") : undefined;
  const timeOptions = selectedDate ? getTimeOptions(selectedDate, minDate) : [];

  const updateValue = (date: Date, timeValue: string) => {
    onChange(formatLocalDateTimeValue(combineDateAndTime(date, timeValue)));
  };

  const handleDateSelect = (date?: Date) => {
    if (!date) {
      onChange("");
      return;
    }

    const nextOptions = getTimeOptions(date, minDate);
    if (!nextOptions.length) {
      return;
    }

    const nextTime =
      selectedTime && nextOptions.some((option) => option.value === selectedTime)
        ? selectedTime
        : nextOptions[0].value;

    updateValue(date, nextTime);
  };

  const handleTimeChange = (timeValue: string) => {
    const baseDate = selectedDate ?? minDate;
    if (!baseDate) {
      return;
    }

    updateValue(baseDate, timeValue);

    if (!isMobile) {
      setOpen(false);
    }
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
      return true;
    }

    return getTimeOptions(date, minDate).length === 0;
  };

  const triggerLabel = selectedDateTime
    ? format(selectedDateTime, "PPP 'at' p")
    : placeholder;

  const trigger = (
    <Button
      type="button"
      variant="outline"
      className={cn(
        "h-11 w-full justify-between border-white/20 bg-white/10 px-3 text-left font-normal text-white hover:bg-white/15 hover:text-white",
        !selectedDateTime && "text-gray-400",
        className
      )}
    >
      <span className="truncate">{triggerLabel}</span>
      <CalendarIcon className="ml-3 h-4 w-4 shrink-0 opacity-70" />
    </Button>
  );

  const mobilePanel = (
    <div className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
          Selected
        </p>
        <p className="mt-2 text-sm font-medium text-white">
          {selectedDateTime ? format(selectedDateTime, "PPP") : "Choose a date"}
        </p>
        <p className="mt-1 text-sm text-gray-400">
          {selectedDateTime ? format(selectedDateTime, "p") : "Then choose a time"}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-1">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={isDateDisabled}
            className="w-fit p-0 text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-300">
        <Clock3 className="h-4 w-4" />
        <span>Preferred time</span>
      </div>

      <ScrollArea className="h-[176px] rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        {selectedDate ? (
          <div className="grid grid-cols-3 gap-2 pr-2">
            {timeOptions.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant={selectedTime === option.value ? "default" : "outline"}
                size="sm"
                className={cn(
                  "justify-center border-white/15 px-2 text-[11px]",
                  selectedTime === option.value
                    ? "button-gradient border-transparent text-white hover:opacity-90"
                    : "bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white"
                )}
                onClick={() => handleTimeChange(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-center text-sm leading-6 text-gray-500">
            Select a date first to see available time slots.
          </div>
        )}
      </ScrollArea>

      <Button
        type="button"
        className="button-gradient w-full"
        disabled={!selectedDateTime}
        onClick={() => setOpen(false)}
      >
        Done
      </Button>
    </div>
  );

  const desktopPanel = (
    <div className="flex gap-4">
      <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          disabled={isDateDisabled}
          className="mx-auto p-0 text-white"
        />
      </div>

      <div className="flex w-48 flex-col">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Selected
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            {selectedDateTime ? format(selectedDateTime, "PPP") : "Choose a date"}
          </p>
          <p className="mt-1 text-sm text-gray-400">
            {selectedDateTime ? format(selectedDateTime, "p") : "Then pick a time"}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-300">
          <Clock3 className="h-4 w-4" />
          <span>Preferred time</span>
        </div>

        <ScrollArea className="mt-3 h-[270px] rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-2 pr-2">
              {timeOptions.map((option) => (
                <Button
                  key={option.value}
                  type="button"
                  variant={selectedTime === option.value ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "justify-center border-white/15 text-xs",
                    selectedTime === option.value
                      ? "button-gradient border-transparent text-white hover:opacity-90"
                      : "bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => handleTimeChange(option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-center text-sm leading-6 text-gray-500">
              Select a date first to see available time slots.
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className="border-white/10 bg-[#121212] text-white">
          <div className="px-4 pb-4 pt-2">{mobilePanel}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto border-white/10 bg-[#121212] p-3 text-white"
      >
        {desktopPanel}
      </PopoverContent>
    </Popover>
  );
};

export default DateTimePicker;
