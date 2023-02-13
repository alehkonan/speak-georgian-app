import format from 'date-fns/format';
import { useUser } from 'src/api/user';
import { ErrorMessage, Loader } from 'src/shared/components';

export const UserInfo = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <div className="flex items-center gap-2">
        {user?.user_metadata.picture && (
          <img
            className="w-10 aspect-square rounded-full"
            src={user.user_metadata.picture}
            alt="user avatar"
          />
        )}
        <span className="text-xl font-bold">
          {user?.user_metadata.full_name}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <span>Account created at</span>
        <span>{user && format(new Date(user.created_at), 'dd MMM yyyy')}</span>
        <span>Account provider</span>
        <span>{user?.app_metadata.provider}</span>
        <span>Role</span>
        <span>{user?.role}</span>
      </div>
    </div>
  );
};
