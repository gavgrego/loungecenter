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
    userEmail: string;
  }
}

declare module "@tanstack/table-core" {
  interface ColumnMeta {
    // filterType: CustomFilterType | StandardFilterType;
    name?: string;
    center?: boolean;
  }
}
