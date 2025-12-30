import PageOne from '@/pages/PageOne';

export function RouterView() {
  return (
    <div style={{ marginTop: 12, border: '1px dashed #999', padding: 12 }}>
      <p>Router overridden for clientA</p>
      <PageOne />
    </div>
  );
}
