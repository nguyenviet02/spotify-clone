import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Spotify</h1>
      <Image src='/images/Spotify_icon.png' alt='Spotify logo' width={200} height={200} />
    </div>
  );
}
