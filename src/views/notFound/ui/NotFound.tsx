import Link from 'next/link';

const NotFoundView = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/">Return Main</Link>
    </div>
  );
};

export default NotFoundView;
