# languages/Dockerfile.java-fixed
FROM firecracker-base

# Install OpenJDK and its runtime dependencies
RUN apk add --no-cache \
        openjdk17 \
        openjdk17-jre

# Set up environment variables
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

RUN ln -sf $JAVA_HOME/lib/libjli.so /usr/lib/libjli.so

# Verify the installation works
RUN java -version && javac -version