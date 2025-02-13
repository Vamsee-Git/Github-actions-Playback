# Use an official base image (e.g., Ubuntu)
FROM ubuntu:latest

# Install necessary dependencies
RUN apt-get update && apt-get install -y curl

# Set the working directory
WORKDIR /usr/src/app

# Copy any required files
COPY script.sh .

# Set the entry point to the script
ENTRYPOINT ["bash", "script.sh"]
