"use client";

import { DatePicker, Input, InputNumber, Button } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDiaDiem, setDateRange, setSoNguoi } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import { convertToSlug } from "@/utils/slug";

export default function SearchBar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);
    const [guests, setGuests] = useState<number>(1);

    const onDatesChange: RangePickerProps["onChange"] = (vals) => {
        setDates((vals as [Dayjs, Dayjs] | null) ?? null);
    };

    const onSearch = () => {
        dispatch(setDiaDiem(destination));
        dispatch(
            setDateRange(
                dates
                    ? { startDate: dates[0].toISOString(), endDate: dates[1].toISOString() }
                    : null
            )
        );
        dispatch(setSoNguoi(guests));
        if (destination.trim()) {
            router.push(`/city/${convertToSlug(destination)}`);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-3">
            <Input
                placeholder="Bạn muốn đi đâu?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-48"
            />
            <DatePicker.RangePicker
                value={dates}
                onChange={onDatesChange}
                disabledDate={(d) => d.isBefore(dayjs(), "day")}
            />
            <div className="flex items-center gap-2">
                <span>Khách</span>
                <InputNumber min={1} max={16} value={guests} onChange={(v) => setGuests(Number(v || 1))} />
            </div>
            <Button type="primary" onClick={onSearch}>Tìm</Button>
        </div>
    );
}


