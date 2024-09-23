/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dummyjson.com",
                port: "",
                pathname: '/image/**'
            }
        ]
    }
};

export default nextConfig;
