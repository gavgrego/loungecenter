export {};

declare global {
  interface CustomJwtSessionClaims {
    publicMetadata: {
      stripeCustomerId: string;
    };
    unsafeMetadata: {
      cardSelections: [];
      alliances: [];
      hasPriorityPass: boolean;
    };
  }
}
