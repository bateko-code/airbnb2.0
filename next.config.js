/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "jsonkeeper.com",
      "a0.muscache.com",
      "jsonkeeper.com.",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidGVrb2NvZGU0IiwiYSI6ImNsOXh6bHJlczAwMWMzb256cGZubHJzZDYifQ.XQhRkhBGFQKolMccszWFcQ",
  },
};
