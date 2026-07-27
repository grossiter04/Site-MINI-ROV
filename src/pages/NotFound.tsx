import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm">
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        <h1 className="text-7xl md:text-9xl font-extrabold text-slate-900 tracking-tight">
          404
        </h1>

        <p className="mt-6 text-2xl md:text-3xl text-slate-600 max-w-3xl">
          {t('notFound.desc')}
        </p>
      </div>
    </section>
  );
}
