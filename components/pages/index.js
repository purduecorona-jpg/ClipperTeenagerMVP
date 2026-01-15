import VideoCard from "../components/VideoCard";
import "../styles/globals.css";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4"
];

export default function Home() {
  return (
    <div className="feed">
      {videos.map((video, index) => (
        <VideoCard key={index} src={video} />
      ))}
    </div>
  );
}
