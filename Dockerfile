FROM node:18 AS build

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Tạo image cho production
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy chỉ các file cần thiết từ image build
COPY --from=build /app /app

# Cài đặt chỉ các dependencies cần thiết cho production
RUN npm ci --only=production

# Mở cổng mà ứng dụng Next.js sẽ chạy
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["npm", "start"]
