/** @type {import('next').NextConfig} */
const nextConfig = {
    fontLoaders: [
        { loader: "@next/font/google", options: { subset: ["latin"] }}
    ]
}

module.exports = nextConfig
