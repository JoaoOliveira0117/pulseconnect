import Post from "@/components/Post";
import PostComposer from "@/components/PostComposer";

export default function Trending() {
  const posts: PostType[] = [
    {
      id: "1",
      user: {
        name: "João Silva",
        username: "joaosilva",
        avatar: "avatar1.jpg",
      },
      content: "Este é o meu primeiro post!",
      createdAt: "2023-09-08T10:00:00Z",
      likes: 15,
      comments: 7,
      reposts: 3,
      liked: true,
      reposted: false,
      image: "post1.jpg",
    },
    {
      id: "2",
      user: {
        name: "Maria Souza",
        username: "mariasouza",
        avatar: "avatar2.jpg",
      },
      content: "Adoro o pôr do sol! 🌅",
      createdAt: "2023-09-08T12:30:00Z",
      likes: 25,
      comments: 10,
      reposts: 5,
      liked: false,
      reposted: true,
    },
    {
      id: "3",
      user: {
        name: "Pedro Ferreira",
        username: "pedroferreira",
        avatar: "avatar3.jpg",
      },
      content: "Mais um dia no escritório...",
      createdAt: "2023-09-08T15:45:00Z",
      likes: 10,
      comments: 2,
      reposts: 1,
      liked: true,
      reposted: false,
      video: "video1.mp4",
    },
    {
      id: "4",
      user: {
        name: "Ana Santos",
        username: "anasantos",
        avatar: "avatar4.jpg",
      },
      content: "Feliz aniversário, mamãe! 🎂🎉",
      createdAt: "2023-09-08T18:20:00Z",
      likes: 50,
      comments: 15,
      reposts: 8,
      liked: true,
      reposted: true,
      image: "birthday.jpg",
    },
    {
      id: "5",
      user: {
        name: "Carlos Oliveira",
        username: "carlosoliveira",
        avatar: "avatar5.jpg",
      },
      content: "A caminho de uma nova aventura!",
      createdAt: "2023-09-08T20:05:00Z",
      likes: 30,
      comments: 5,
      reposts: 2,
      liked: false,
      reposted: false,
      replyTo: {
        id: "1",
        user: {
          name: "João Silva",
          username: "joaosilva",
        },
      },
    },
  ];
  return (
    <div className="min-w-[1000px] flex flex-col gap-8">
      <PostComposer />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
