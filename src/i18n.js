import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          greeting: 'Hello, {{name}}!',
          Yearth: 'Year {{year}}',
          "Medical Financial Calculator" : "Medical Financial Calculator",
          medicalTotal: '{{years}}th Year Medical Ins Total (HKD): {{total}}',
          

    
         
        }
      },
      "zh-HK": {
        translation: {
          welcome: '歡迎',
          greeting: '你好, {{name}}!',
          Yearth: '第{{year}}年',
          "Medical Financial Calculator" : "醫療融資計算機",
          medicalTotal: '{{years}}th Year Medical Ins Total (HKD): {{total}}',
          
  
          
          
        }
      },
      "zh-CN": {
        translation: {
          welcome: '欢迎',
          greeting: '你好, {{name}}!',
          Yearth: '第{{year}}年',
          "Medical Financial Calculator" : "醫療醫療融資計算機",
          medicalTotal: '{{years}}th Year Medical Ins Total (HKD): {{total}}',
          
      
        }
      }
    }
  });

export default i18next;