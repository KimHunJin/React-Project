export default class DateUtil {
    static monthes: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    static week: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set']

    static pad = (n) => {
        return n < 10 ? '0' + n : n;
    }

    static changeDate(originalDate): string {
        const date = originalDate.getDate();
        const month = originalDate.getMonth();
        const year = originalDate.getFullYear();


        const day = originalDate.getDay();
        const label = this.week[day];

        return label + " " + this.monthes[month] + " " + this.pad(date) + " " + year
    }
}



