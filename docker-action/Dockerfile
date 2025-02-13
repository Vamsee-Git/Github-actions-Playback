# Use an official base image (e.g., Ubuntu)
FROM ubuntu:latest

# Install necessary dependencies
RUN apt-get update && apt-get install -y curl

# Set the working directory
WORKDIR /usr/src/app

# Copy the script into the container
COPY script.sh .

# Make sure the script is executable
RUN chmod +x script.sh
RUN ls -l /usr/src/app
# Set the entry point to the script
ENTRYPOINT ["bash", "/usr/src/app/script.sh"]
