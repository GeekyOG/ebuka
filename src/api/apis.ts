import { axios_server, type ApiResponse } from ".";

export async function getTrendingVideos() {
  const res = await axios_server.get<any[]>("trending-videos");
  return res.data;
}

export async function getImages() {
  const res = await axios_server.get<any[]>("images");
  return res.data;
}

export async function getDiscography() {
  const res = await axios_server.get<any[]>("discography");
  return res.data;
}

export async function getAlbum() {
  const res = await axios_server.get<any[]>("albums");
  return res.data;
}

export async function getTour() {
  const res = await axios_server.get<any[]>("tour");
  return res.data;
}

export async function getLatestSingle() {
  const res = await axios_server.get<any[]>("latestSingle");
  return res.data;
}

export async function bookMercy(data: any) {
  const res = await axios_server.post<any>("book", data);

  return res.data;
}
