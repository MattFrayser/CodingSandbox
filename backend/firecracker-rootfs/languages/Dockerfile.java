# languages/Dockerfile.java-fixed
FROM firecracker-base

# Install OpenJDK and its runtime dependencies
RUN apk add --no-cache openjdk17

# Set up environment variables
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

# Verify the installation works
RUN java -version && javac -version