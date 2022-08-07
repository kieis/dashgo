import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
//import Chart from "react-apexcharts";

type XaxisTypeProps = "datetime" | "category" | "numeric";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
}); //to avoid error while loading in SSR, apexcharts needs be loaded on client

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime' as XaxisTypeProps,
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [{
    name: 'series1', data: [31, 23, 40, 120, 54, 20]
}];

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid flex="1" gap="4" minChildWidth={320} alignItems="flex-start">
                    <Box h="100%" p="8" bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart type="area" height={160} options={options} series={series}/>
                    </Box>
                    <Box h="100%" p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart type="area" height={160} options={options} series={series}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}