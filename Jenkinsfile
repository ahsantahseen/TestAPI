pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Run') {
      steps {
        sh 'node index.js'
      }
    }
  }
}