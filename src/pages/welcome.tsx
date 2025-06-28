import Head from 'next/head';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <Head>
        <title>Welcome - Xmobile</title>
      </Head>
      <img
        src="/xmobile_logo.png"
        alt="Xmobile Logo"
        className="w-50 h-auto mb-10"
        style={{ maxWidth: '200px' }}
      />
      <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
    </div>
  );
}
