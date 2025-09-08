export const bonsaiCollection = [
  {
    id: 1,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/hero_image.png",
    sub_images: ["/1.png", "/1_1.png"]
  },
  {
    id: 2,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/2.png",
    sub_images: ["/2_1.png",]
  },
  {
    id: 3,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/3.png",
    sub_images: ["/3.png",]
  },
  {
    id: 4,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/4.png",
    sub_images: ["/4.png",]
  },
  {
    id: 5,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/5.png",
    sub_images: ["/5.png",]
  },
  {
    id: 6,
    name: "Chưa biết tên",
    species: "Chưa biết loài",
    age: "10 năm",
    description: "Chưa biết mô tả",
    image: "/6.png",
    sub_images: ["/6.png",]
  },
] as const;

export type Bonsai = typeof bonsaiCollection[number];
