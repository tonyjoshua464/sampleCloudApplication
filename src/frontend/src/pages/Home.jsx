import React from "react";

const Home = () => {
  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        borderRadius: '8px',
        padding: '60px 20px',
        color: 'white',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontWeight: '700'
        }}>
          Welcome to Our Cloud Infrastructure Platform
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Powering modern applications with seamless CI/CD pipelines and Terraform infrastructure
        </p>
        <div>
          <button style={{
            padding: '12px 25px',
            background: 'white',
            color: '#6e8efb',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginRight: '15px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            Get Started
          </button>
          <button style={{
            padding: '12px 25px',
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            Learn More
          </button>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
        flexWrap: 'wrap'
      }}>
        {[
          {title: 'Automated Deployments', icon: '🚀', desc: 'Streamline your workflow with automated CI/CD pipelines'},
          {title: 'Infrastructure as Code', icon: '⚙️', desc: 'Manage your infrastructure using Terraform'},
          {title: 'Scalable Solutions', icon: '📈', desc: 'Build applications that scale with your business needs'}
        ].map((item, index) => (
          <div key={index} style={{
            flex: '1 1 300px',
            margin: '15px',
            padding: '25px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            background: 'white'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{item.icon}</div>
            <h3 style={{ margin: '10px 0', color: '#444' }}>{item.title}</h3>
            <p style={{ color: '#666' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;