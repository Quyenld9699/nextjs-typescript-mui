pipeline{
    agent any

    stages{
        stage("Clone stage!") {
            steps{
                git branch: 'main', url: 'https://github.com/Quyenld9699/nextjs-typescript-mui.git'
            }
        }
        stage("Build docker images") {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t quyenld9699/NextMuiTs:v1 .'
                    sh 'docker push quyenld9699/NextMuiTs:v1'
                }
            }
        }
    }

}