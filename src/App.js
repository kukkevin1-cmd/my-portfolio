import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. 프로젝트 데이터 정의 (상세 설명 포함)
const PROJECTS = [
  {
    id: 1,
    emoji: "🚀",
    title: "Cloud-Native Portfolio",
    summary: "React & AWS 기반의 자동 배포 시스템",
    details: "React와 AWS Amplify를 활용하여 구축한 반응형 포트폴리오 웹사이트입니다. GitHub Actions와 연동하여 코드 푸시 시 자동으로 AWS 클라우드 인프라에 업데이트되는 CI/CD 파이프라인을 경험하였습니다.",
    tags: ["React", "AWS Amplify", "CI/CD"]
  },
  {
    id: 2,
    emoji: "♟️",
    title: "Serverless Strategy Engine",
    summary: "서버리스 기반의 전략 게임 로직 설계",
    details: "Chess/Go 게임 로직을 구현하고 AWS Lambda를 활용한 서버리스 백엔드 구축을 목표로 하고 있습니다. 대규모 트래픽 처리를 위해 DynamoDB와 연동된 확장 가능한 시스템 아키텍처를 설계하고 있습니다.",
    tags: ["Node.js", "AWS Lambda", "Serverless"]
  }
];

function App() {
  // 2. 모달 상태 관리
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App" style={{ 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      minHeight: '100vh', 
      padding: '40px', 
      fontFamily: '"Inter", sans-serif'
    }}>
      
      {/* --- 프로필 섹션 --- */}
      <div className="uw-section" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ height: '80px', marginBottom: '20px' }} />
        
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Kevin Kuk</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Computer Science @ <span style={{ color: '#b7a57a', fontWeight: 'bold' }}>UW Seattle</span>
        </p>
        
        <hr style={{ borderColor: '#b7a57a', width: '50%', margin: '20px auto' }} />
        
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '30px' }}>
          Cloud-Native Developer | AWS Amplify & React
        </p>

        {/* --- 링크 및 이력서 버튼 --- */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '50px' }}>
          <a href="https://github.com/kukkevin1-cmd" target="_blank" rel="noreferrer" 
             style={{ color: '#f8fafc', textDecoration: 'none', border: '1px solid #334155', padding: '10px 20px', borderRadius: '5px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/kevin-kuk-3a293b3b3/" target="_blank" rel="noreferrer"
             style={{ color: '#f8fafc', textDecoration: 'none', border: '1px solid #334155', padding: '10px 20px', borderRadius: '5px' }}>LinkedIn</a>
          <a href="/2026_Kevin_Resume.pdf" download="Kevin_Kuk_Resume.pdf"
             style={{ backgroundColor: '#b7a57a', color: '#4b2e83', fontWeight: 'bold', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Download Resume
          </a>
        </div>

        {/* --- 기술 스택 섹션 --- */}
        <div style={{ textAlign: 'left', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ color: '#b7a57a', borderBottom: '2px solid #b7a57a', paddingBottom: '10px', marginBottom: '25px' }}>Technical Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>💻 Languages</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Java, Python, TypeScript, JavaScript, SQL, C</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>📚 CS Fundamentals</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Data Structures (332), Software Design (331), Hardware (351)</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>🛠 Tools & Cloud</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>AWS (Amplify), Git, SQL, AI Productivity Tools</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>📐 Mathematics</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Calculus, Linear Algebra, Discrete Math</p>
            </div>
          </div>
        </div>

        {/* --- 프로젝트 리스트 섹션 --- */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ color: '#b7a57a', borderBottom: '2px solid #b7a57a', paddingBottom: '10px' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                style={{ 
                  backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', cursor: 'pointer',
                  border: '1px solid #334155', transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '2.5rem' }}>{proj.emoji}</span>
                <h3 style={{ color: '#b7a57a', margin: '15px 0 10px 0' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{proj.summary}</p>
                <p style={{ fontSize: '0.8rem', color: '#b7a57a', marginTop: '10px' }}>Click to learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 상세 설명 모달창 --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(2, 6, 23, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
          padding: '20px'
        }} onClick={() => setSelectedProject(null)}>
          <div style={{ 
            backgroundColor: '#1e293b', padding: '40px', borderRadius: '15px', maxWidth: '600px', 
            width: '100%', border: '1px solid #b7a57a', position: 'relative' 
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.5rem' }}
            >✕</button>
            <span style={{ fontSize: '3.5rem' }}>{selectedProject.emoji}</span>
            <h2 style={{ color: '#b7a57a', fontSize: '2rem', marginBottom: '20px' }}>{selectedProject.title}</h2>
            <p style={{ lineHeight: '1.8', color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '25px' }}>{selectedProject.details}</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {selectedProject.tags.map(tag => (
                <span key={tag} style={{ backgroundColor: '#4b2e83', color: '#f8fafc', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;