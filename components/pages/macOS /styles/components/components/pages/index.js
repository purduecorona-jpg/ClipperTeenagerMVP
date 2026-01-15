import VideoCard from "../components/VideoCard";
import "../styles/globals.css";

const videos = [
  "/videos/sample1.mp4",
  "/videos/sample2.mp4",
  "/videos/sample3.mp4"
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
