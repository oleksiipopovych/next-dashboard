import CustomersTable from "@/app/ui/customers/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    return <CustomersTable query={query} />;
}