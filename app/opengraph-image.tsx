import { ImageResponse } from 'next/og';

export const alt = 'Elang Argawana — Software Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#141414',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #262626 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1f1f1f 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          border: '1px solid #2a2a2a',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
              }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#a3a3a3',
              }}
            >
              Available for Projects
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              letterSpacing: '0.1em',
              color: '#737373',
            }}
          >
            Semarang, Indonesia
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Elang Argawana
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#a3a3a3',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            Software Developer building thoughtful digital experiences, robust web & mobile applications.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #262626',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Next.js', 'React', 'Flutter', 'TypeScript', 'Tailwind'].map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 16,
                  color: '#d4d4d4',
                  backgroundColor: '#262626',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <span
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#ffffff',
            }}
          >
            elangargawana.my.id
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
