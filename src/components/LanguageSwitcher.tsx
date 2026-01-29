import { useLanguage, Language } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ className, variant = 'dark' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'mk', label: 'MK' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className={cn('flex items-center gap-1 text-sm', className)}>
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'px-1.5 py-0.5 transition-colors',
              language === lang.code
                ? variant === 'light'
                  ? 'text-primary-foreground font-medium'
                  : 'text-foreground font-medium'
                : variant === 'light'
                  ? 'text-primary-foreground/50 hover:text-primary-foreground/80'
                  : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className={cn(
              variant === 'light' ? 'text-primary-foreground/30' : 'text-muted-foreground/50'
            )}>
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
