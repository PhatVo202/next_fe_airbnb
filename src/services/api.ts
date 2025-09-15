import http from "@/lib/api";

export const userServ = {
  login: (values: unknown) => {
    return http({
      url: "/auth/signin",
      method: "POST",
      data: values,
    });
  },

  signup: (values: unknown) => {
    return http({
      url: "/auth/signup",
      method: "POST",
      data: values,
    });
  },

  getUsersPage: (index: number) => {
    return http({
      url: `/users/phan-trang-tim-kiem?pageIndex=${index}&pageSize=10`,
      method: "GET",
    });
  },

  getUserByID: (id: number) => {
    return http({
      url: `/users/${id}`,
      method: "GET",
    });
  },

  createNewUser: (user: unknown) => {
    return http({
      url: `/users`,
      method: "POST",
      data: user,
    });
  },

  deleteUser: (id: number | string) => {
    return http({
      url: `/users/?id=${id}`,
      method: "DELETE",
    });
  },

  updateUser: (
    userUpdate: { id: string | number } & Record<string, unknown>
  ) => {
    return http({
      url: `/users/${userUpdate.id}`,
      method: "PUT",
      data: userUpdate,
    });
  },

  searchUser: (key: string) => {
    return http({
      url: `users/search/${key}`,
      method: "GET",
    });
  },

  updateAvatar: (avatar: FormData) => {
    return http({
      url: `users/upload-avatar`,
      method: "POST",
      data: avatar,
    });
  },
};

export const roomServ = {
  getAllRooms: () => {
    return http({
      url: `/phong-thue`,
      method: "GET",
    });
  },
};

// export const roomServ = {
//   getAllRooms: () => httpsNoLoading.get("/phong-thue"),
//   createRoom: (data: unknown) => httpsAdmin.post("/phong-thue", data),
//   uploadPhotoRoom: (id: number | string, photo: FormData) =>
//     httpsAdmin.post(`/phong-thue/upload-hinh-phong?maPhong=${id}`, photo),
//   deleteRoom: (id: number | string) => httpsAdmin.delete(`/phong-thue/${id}`),
//   updateRoom: (data: { id: number | string } & Record<string, unknown>) =>
//     httpsAdmin.put(`/phong-thue/${data.id}`, data),
// };

// export const locationServ = {
//   getAllLocations: () => httpsNoLoading.get("/vi-tri"),
//   getLocationByID: (id: number | string) => httpsNoLoading.get(`/vi-tri/${id}`),
//   createLocation: (data: unknown) => httpsAdmin.post("/vi-tri", data),
//   updateLocation: (data: { id: number | string } & Record<string, unknown>) =>
//     httpsAdmin.put(`/vi-tri/${data.id}`, data),
//   deleteLocation: (id: number | string) => httpsAdmin.delete(`/vi-tri/${id}`),
//   uploadPhotoLocation: (id: number | string, photo: FormData) =>
//     httpsAdmin.post(`/vi-tri/upload-hinh-vitri?maViTri=${id}`, photo),
// };

// export const bookingSer = {
//   getAllBookings: () => httpsAdmin.get("/dat-phong"),
//   deleteBooking: (id: number | string) => httpsAdmin.delete(`/dat-phong/${id}`),
// };
