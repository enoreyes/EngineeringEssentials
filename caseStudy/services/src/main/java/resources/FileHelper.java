package resources;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import pojo.Stock;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;


public class FileHelper {
    private static final ObjectMapper mapper = new ObjectMapper();

    public static List<Stock> readAllStocks(String fileName) throws IOException {

        InputStream inputStream = new FileInputStream(("data" + File.separatorChar + fileName));
        // InputStream resourceAsStream = FileHelper.class.getClassLoader().getResourceAsStream(fileName);
        return mapper.readValue(inputStream, new TypeReference<List<Stock>>() {
        });
    }
}
