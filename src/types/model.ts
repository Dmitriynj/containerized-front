type Message = {
  id: string;
  avatarLink: string;
  message: string;
  owner: string;
  effDateTime: string;
  origin: 'my' | 'not-mine'
};

export type {Message};