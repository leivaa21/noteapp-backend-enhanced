type NoteCriteriaType = {
  filter: 'BY_ID' | 'BY_TITLE' | 'OLDER_THAN' | 'NEWER_THAN' | 'ANY';
  maxCount: number;
};

export abstract class NoteCriteria {
  constructor(public readonly _TYPE: NoteCriteriaType) {}
}

export class NoteCriteriaByID extends NoteCriteria {
  constructor(public readonly id: string) {
    super({
      filter: 'BY_ID',
      maxCount: 1,
    });
  }
}
export class NoteCriteriaByTitle extends NoteCriteria {
  constructor(public readonly title: string) {
    super({
      filter: 'BY_TITLE',
      maxCount: 1,
    });
  }
}
