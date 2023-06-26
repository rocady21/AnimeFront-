import moment from "moment/moment"



export const MomentFromNow = (Date)=> {

    if(Date) {
        const invervalo = moment(Date).fromNow();
        return invervalo
    }
}