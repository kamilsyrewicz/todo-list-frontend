import { SolidColorsTypes, transparentColors } from './light';

type ThemeConfigProps = {
  solidColors: SolidColorsTypes;
};

export default function generateTheme({ solidColors }: ThemeConfigProps) {
  return {
    global: { solidColors, transparentColors },
    bg: {
      messageBubble: {
        brandPrimary: {
          default: solidColors.primary[60],
        },
        neutral: {
          default: solidColors.gray[90],
        },
        button: {
          brand: {
            secondary: {
              default: solidColors.secondary[25],
            },
          },
        },
      },
      tableCell: {
        neutralAlt: {
          default: solidColors.gray[100],
        },
      },
      icon: {
        secondary: {
          default: solidColors.secondary[10],
        },
      },
      body: {
        neutralAlt: {
          default: solidColors.gray[100],
          highlighted: solidColors.gray[90],
        },
      },
      comment: {
        neutral: {
          default: solidColors.gray[90],
        },
        brandSecondary: {
          default: solidColors.secondary[10],
        },
      },
      settings: {
        bg: solidColors.gray[85],
        white: solidColors.gray[100],
      },
      referral: {
        bg: solidColors.primary[60],
      },
      profileCompletion: {
        brandPrimary: {
          default: solidColors.primary[65],
        },
      },
      appbar: {
        brand: {
          primary: {
            default: solidColors.primary[60],
          },
        },
        neutralAlt: {
          default: solidColors.gray[100],
        },
      },
      searchHighlight: {
        brandSecondary: {
          default: solidColors.secondary[25],
        },
      },
      badge: {
        dangerPrimary: {
          default: solidColors.error[50],
        },
        primary: {
          default: solidColors.primary[60],
        },
        brandSecondary: {
          default: solidColors.secondary[25],
        },
      },
      activityIndicator: {
        primary: {
          default: solidColors.primary[50],
        },
        light: {
          default: solidColors.gray[100],
        },
      },
      tag: {
        brandPrimary: {
          default: solidColors.primary[60],
        },
      },
      skillBadge: {
        neutral: {
          default: solidColors.gray[90],
        },
        secondary: {
          default: solidColors.secondary[25],
        },
      },
      input: {
        neutral: { default: solidColors.gray[90] },
        brandPrimary: {
          hover: solidColors.secondary[10],
          default: solidColors.primary[60],
        },
        dangerSecondary: { hover: solidColors.error[100] },
      },
      separator: { neutral: { default: solidColors.gray[90] } },
      overlay: { neutral: { default: transparentColors.gray[20] } },
      tokenAward: {
        brandPrimary: solidColors.primary[65],
      },
      card: {
        default: solidColors.gray[90],
        neutral: solidColors.gray[100],
        neutralAlt: {
          default: solidColors.gray[100],
        },
        brandPrimary: {
          default: solidColors.primary[60],
          highlighted: solidColors.primary[50],
        },
      },
      summaryButton: {
        brandPrimary: {
          highlighted: solidColors.secondary[25],
        },
        neutral: {
          default: solidColors.gray[90],
        },
      },
      upcomingEvent: {
        brandPrimary: {
          default: solidColors.secondary[10],
          neutral: { default: solidColors.gray[80] },
        },
      },
      progressBar: {
        neutralAlt: {
          default: solidColors.gray[100],
        },
      },
      logo: {
        avatar: {
          primary: {
            default: solidColors.primary[60],
          },
        },
      },
      logoAvatar: {
        brandPrimary: {
          default: solidColors.primary[60],
        },
      },
    },
    text: {
      primary: {
        default: solidColors.primary[10],
        white: solidColors.gray[100],
      },
    },
  };
}

export type ThemeType = ReturnType<typeof generateTheme>;
