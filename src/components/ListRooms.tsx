import Link from "next/link";
import { Card } from "antd";

interface RoomItem {
    id?: number;
    maPhong?: number;
    tenPhong?: string;
    moTa?: string;
}

export default function ListRooms({ item }: { item: RoomItem }) {
    const roomId = item.id ?? item.maPhong;
    const content = (
        <Card title={item.tenPhong}>
            <p>{item.moTa}</p>
        </Card>
    );

    return roomId ? <Link href={`/rooms/${roomId}`}>{content}</Link> : content;
}
