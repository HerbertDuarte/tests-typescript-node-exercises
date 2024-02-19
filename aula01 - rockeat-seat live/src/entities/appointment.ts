interface IAppointment {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: IAppointment;

  get customer() {
    return this.props.customer;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  constructor(props: IAppointment) {
    const {endsAt, startsAt} = props
    if(endsAt <= startsAt){
      throw new Error("start date cannot be more then end date")
    }
    this.props = props;
  }
}
