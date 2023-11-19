import format from 'date-fns/format';
import { useGetUser } from 'src/cache/user/useGetUser';

export const UserInfo = () => {
  const { data: user } = useGetUser();

  return (
    <div>
      <div className="flex items-center gap-2">
        {user?.user_metadata.picture && (
          <img
            alt="user avatar"
            className="aspect-square w-10 rounded-full"
            src={user.user_metadata.picture}
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
