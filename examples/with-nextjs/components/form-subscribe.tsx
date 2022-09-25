export const FormSubscribe = () => {
  return (
    <form className={'space-y-4'}>
      <input
        type="email"
        placeholder={'Email'}
        className={
          'border-secondary-40 placeholder:text-neutral-30 py-1.75 hover:border-neutral-0 focus-visible:border-neutral-0 block w-full rounded-full border bg-transparent px-4 placeholder:text-sm focus:outline-none'
        }
      />
      <div className="">
        <button
          type={'submit'}
          className={
            'bg-primary hover:bg-primary-50 active:bg-primary-30 text-neutral rounded-full px-8 py-2.5 text-sm font-semibold'
          }
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
