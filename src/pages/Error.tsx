import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-2 text-black'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='font-bold'>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='text-blue-600'>
        Go back to home page
      </Link>
    </div>
  );
}
