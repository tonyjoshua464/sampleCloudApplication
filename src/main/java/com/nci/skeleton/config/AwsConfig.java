package com.nci.skeleton.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsSessionCredentials;

@Configuration
public class AwsConfig {

    private String awsAccessKeyId="secreteValue";

    private String awsSecretKeyId="secrete";

    private String awsSessionToken="secrete";

    @Bean
    public AwsSessionCredentials awsBasicCredentials() {
        return AwsSessionCredentials.create(
                awsAccessKeyId,
                awsSecretKeyId,
                awsSessionToken);
    }

}
