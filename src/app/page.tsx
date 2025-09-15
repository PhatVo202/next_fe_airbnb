"use client";

import { useEffect, useState } from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { convertToSlug } from "@/utils/slug";
import Image from "next/image";
import http from "@/lib/api";

type City = { tinhThanh: string };

const explorePlaces = [
  { time: "15 phút", image: "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp" },
  { time: "3 giờ", image: "https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp" },
  { time: "6.5 giờ", image: "https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp" },
  { time: "15 phút", image: "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp" },
  { time: "7.5 giờ", image: "https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp" },
  { time: "45 phút", image: "https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp" },
  { time: "30 phút", image: "https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp" },
  { time: "5 giờ", image: "https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp" },
];

export default function Home() {
  const [cities, setCities] = useState<City[] | null>(null);

  useEffect(() => {

    getPosition()
    // http
    //   .get("vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
    //   .then((res) => setCities(res.data.content.data as City[]))
    //   .catch(() => setCities([]));
  }, []);

  const getPosition = async () => {
    const res = await http({ url: "vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8", method: "GET" })
    res && setCities(res.data.content.data as City[])
  }

  console.log({ cities: cities })

  return (

    <div className="bg-white min-h-screen">
      <div className="w-[95%] mx-auto space-y-12 py-10">
        {cities && cities.length > 0 ? (
          <div>
            <h1 className="font-bold text-3xl mb-3">Khám phá điểm đến gần đây</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((item, index) => (
                <Link key={`${item.tinhThanh}-${index}`} href={`/city/${convertToSlug(item.tinhThanh)}`}>
                  <Card
                    hoverable
                    className="w-full flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <div className="flex items-center gap-3">
                      <Image className="rounded-lg object-cover" src={explorePlaces[index]?.image} alt="" width={48} height={48} />
                      <div>
                        <h2 className="font-bold">{item.tinhThanh}</h2>
                        <p className="text-gray-700 text-sm">{explorePlaces[index]?.time}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-3 pt-6 pb-16">
          <h1 className="font-bold text-3xl">Ở bất cứ đâu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {explorePlaces.map((item, index) => (
              <Card key={index} hoverable className="w-full" cover={<Image alt="" src={item.image} width={500} height={250} style={{ width: "100%", height: "auto" }} />}>
                <Meta title={item.time} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
