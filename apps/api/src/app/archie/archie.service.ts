import { Injectable } from '@nestjs/common';
import { IArchie } from '@archmaster/shared/types';
import { InjectModel } from '@nestjs/mongoose';
import { Archie, ArchieDocument } from '../db/schema/archie.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArchieService {
  constructor(
    @InjectModel(Archie.name)
    private readonly archieModel: Model<ArchieDocument>
  ) {
    this.update({
      weight: 100,
      weightUnit: 'kg',
      food: [],
      dateOfBirth: '16.06.2021',
    });
  }

  get(): IArchie {
    return {} as unknown as IArchie;
  }

  async update(archie: Partial<IArchie>): Promise<IArchie> {
    const existingArchie = await this.archieModel.findOneAndUpdate(
      {},
      {},
      { sort: { created_at: -1 } }
    );

    if (existingArchie) {
      const newArchie = { ...existingArchie, ...archie };

      const updatedArchie = await this.archieModel.findOneAndUpdate(
        {},
        newArchie,
        {
          sort: { created_at: -1 },
        }
      );
      return updatedArchie;
    }

    const newArchie = new this.archieModel({ ...archie });
    newArchie.save();
  }
}
