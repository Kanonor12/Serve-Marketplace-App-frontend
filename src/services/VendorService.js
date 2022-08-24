import axios from "axios";

const VENDOR_API_BASE_URL = "http://localhost:8081/api/v1/serviceproviders"

class VendorService {
    createServiceProvider(serviveProvider) {
        return  axios.post(VENDOR_API_BASE_URL, serviveProvider);
    }

    getServiceProviders() {
       
        return  axios.get(VENDOR_API_BASE_URL);
    }

    deleteServiceProvider(id){       
            return  axios.delete(VENDOR_API_BASE_URL + "/" + id);
    }

    getServiceProvider(id){       
        return  axios.get(VENDOR_API_BASE_URL + "/" + id);
    }

    updateServiceProvider(serviveProvider, id) {
        return axios.put(VENDOR_API_BASE_URL + "/" + id, serviveProvider)
    }
}
export default new VendorService();