pipeline {
    agent any
    triggers {
       githubPush()
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
    post{
        success {
            mail to: "ahsan.tntboy@gmail.com",
            subject: "Build Notification",
            body: "Development Build Successful"
        }
        failure {
            mail to: "ahsan.tntboy@gmail.com",
            subject: "Build Notification",
            body: "Build Failed"
        }
    }
}
