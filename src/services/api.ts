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
      url: "/phong-thue",
      method: "GET",
    });
  },
  createRoom: (data: unknown) => {
    return http({
      url: "/phong-thue",
      method: "POST",
      data: data,
    });
  },
  uploadPhotoRoom: (id: number | string, photo: FormData) => {
    return http({
      url: `/phong-thue/upload-hinh-phong?maPhong=${id}`,
      method: "POST",
      data: photo,
    });
  },
  deleteRoom: (id: number | string) => {
    return http({
      url: `/phong-thue/${id}`,
      method: "DELETE",
    });
  },
  updateRoom: (data: { id: number | string } & Record<string, unknown>) => {
    return http({
      url: `/phong-thue/${data.id}`,
      method: "PUT",
      data: data,
    });
  },
};

export const locationServ = {
  getAllLocations: () => {
    return http({
      url: "/vi-tri",
      method: "GET",
    });
  },
  getLocationByID: (id: number | string) => {
    return http({
      url: `/vi-tri/${id}`,
      method: "GET",
    });
  },
  createLocation: (data: unknown) => {
    return http({
      url: "/vi-tri",
      method: "POST",
      data: data,
    });
  },
  updateLocation: (data: { id: number | string } & Record<string, unknown>) => {
    return http({
      url: `/vi-tri/${data.id}`,
      method: "PUT",
      data: data,
    });
  },
  deleteLocation: (id: number | string) => {
    return http({
      url: `/vi-tri/${id}`,
      method: "DELETE",
    });
  },
  uploadPhotoLocation: (id: number | string, photo: FormData) => {
    return http({
      url: `/vi-tri/upload-hinh-vitri?maViTri=${id}`,
      method: "POST",
      data: photo,
    });
  },
};

export const bookingSer = {
  getAllBookings: () => {
    return http({
      url: "/dat-phong",
      method: "GET",
    });
  },
  deleteBooking: (id: number | string) => {
    return http({
      url: `/dat-phong/${id}`,
      method: "DELETE",
    });
  },
};
