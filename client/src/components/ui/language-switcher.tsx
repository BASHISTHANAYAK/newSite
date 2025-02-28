import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { Button } from './button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [, setLocation] = useLocation();

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    if (langCode === 'fr') {
      setLocation('/fr');
    } else {
      setLocation('/');
    }
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2 h-9 px-3 font-medium"
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`flex items-center gap-2 cursor-pointer ${
              i18n.language === language.code ? 'bg-muted' : ''
            }`}
            onClick={() => changeLanguage(language.code)}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 