import axios from 'axios';
import ServiceUrls from '../../utils/ServiceUrls';

const BarChartService = {
    readPosts: function () {
        return axios.get(ServiceUrls["read-posts"]);
    }
}

export default BarChartService;